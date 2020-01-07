import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListResourceRecordSetsRequest, ListResourceRecordSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourceRecordSetsCommandInput = ListResourceRecordSetsRequest;
export declare type ListResourceRecordSetsCommandOutput = ListResourceRecordSetsResponse & __MetadataBearer;
export declare class ListResourceRecordSetsCommand extends $Command<ListResourceRecordSetsCommandInput, ListResourceRecordSetsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListResourceRecordSetsCommandInput;
    constructor(input: ListResourceRecordSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceRecordSetsCommandInput, ListResourceRecordSetsCommandOutput>;
    private serialize;
    private deserialize;
}
