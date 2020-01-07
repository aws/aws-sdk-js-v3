import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ChangeResourceRecordSetsRequest, ChangeResourceRecordSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ChangeResourceRecordSetsCommandInput = ChangeResourceRecordSetsRequest;
export declare type ChangeResourceRecordSetsCommandOutput = ChangeResourceRecordSetsResponse & __MetadataBearer;
export declare class ChangeResourceRecordSetsCommand extends $Command<ChangeResourceRecordSetsCommandInput, ChangeResourceRecordSetsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ChangeResourceRecordSetsCommandInput;
    constructor(input: ChangeResourceRecordSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ChangeResourceRecordSetsCommandInput, ChangeResourceRecordSetsCommandOutput>;
    private serialize;
    private deserialize;
}
