import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { UpdateEnvironmentRequest, UpdateEnvironmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEnvironmentCommandInput = UpdateEnvironmentRequest;
export declare type UpdateEnvironmentCommandOutput = UpdateEnvironmentResult & __MetadataBearer;
export declare class UpdateEnvironmentCommand extends $Command<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: UpdateEnvironmentCommandInput;
    constructor(input: UpdateEnvironmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}
