import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { CreateEnvironmentEC2Request, CreateEnvironmentEC2Result } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEnvironmentEC2CommandInput = CreateEnvironmentEC2Request;
export declare type CreateEnvironmentEC2CommandOutput = CreateEnvironmentEC2Result & __MetadataBearer;
export declare class CreateEnvironmentEC2Command extends $Command<CreateEnvironmentEC2CommandInput, CreateEnvironmentEC2CommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: CreateEnvironmentEC2CommandInput;
    constructor(input: CreateEnvironmentEC2CommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEnvironmentEC2CommandInput, CreateEnvironmentEC2CommandOutput>;
    private serialize;
    private deserialize;
}
