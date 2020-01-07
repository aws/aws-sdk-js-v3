import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateQueryLoggingConfigRequest, CreateQueryLoggingConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateQueryLoggingConfigCommandInput = CreateQueryLoggingConfigRequest;
export declare type CreateQueryLoggingConfigCommandOutput = CreateQueryLoggingConfigResponse & __MetadataBearer;
export declare class CreateQueryLoggingConfigCommand extends $Command<CreateQueryLoggingConfigCommandInput, CreateQueryLoggingConfigCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateQueryLoggingConfigCommandInput;
    constructor(input: CreateQueryLoggingConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateQueryLoggingConfigCommandInput, CreateQueryLoggingConfigCommandOutput>;
    private serialize;
    private deserialize;
}
