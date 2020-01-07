import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetQueryLoggingConfigRequest, GetQueryLoggingConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetQueryLoggingConfigCommandInput = GetQueryLoggingConfigRequest;
export declare type GetQueryLoggingConfigCommandOutput = GetQueryLoggingConfigResponse & __MetadataBearer;
export declare class GetQueryLoggingConfigCommand extends $Command<GetQueryLoggingConfigCommandInput, GetQueryLoggingConfigCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetQueryLoggingConfigCommandInput;
    constructor(input: GetQueryLoggingConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQueryLoggingConfigCommandInput, GetQueryLoggingConfigCommandOutput>;
    private serialize;
    private deserialize;
}
