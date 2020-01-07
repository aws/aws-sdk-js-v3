import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetChangeRequest, GetChangeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetChangeCommandInput = GetChangeRequest;
export declare type GetChangeCommandOutput = GetChangeResponse & __MetadataBearer;
export declare class GetChangeCommand extends $Command<GetChangeCommandInput, GetChangeCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetChangeCommandInput;
    constructor(input: GetChangeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetChangeCommandInput, GetChangeCommandOutput>;
    private serialize;
    private deserialize;
}
