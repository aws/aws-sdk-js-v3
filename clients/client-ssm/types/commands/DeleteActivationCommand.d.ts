import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteActivationRequest, DeleteActivationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteActivationCommandInput = DeleteActivationRequest;
export declare type DeleteActivationCommandOutput = DeleteActivationResult & __MetadataBearer;
export declare class DeleteActivationCommand extends $Command<DeleteActivationCommandInput, DeleteActivationCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteActivationCommandInput;
    constructor(input: DeleteActivationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteActivationCommandInput, DeleteActivationCommandOutput>;
    private serialize;
    private deserialize;
}
