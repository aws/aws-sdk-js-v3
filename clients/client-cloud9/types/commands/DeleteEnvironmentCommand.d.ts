import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { DeleteEnvironmentRequest, DeleteEnvironmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEnvironmentCommandInput = DeleteEnvironmentRequest;
export declare type DeleteEnvironmentCommandOutput = DeleteEnvironmentResult & __MetadataBearer;
export declare class DeleteEnvironmentCommand extends $Command<DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: DeleteEnvironmentCommandInput;
    constructor(input: DeleteEnvironmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}
