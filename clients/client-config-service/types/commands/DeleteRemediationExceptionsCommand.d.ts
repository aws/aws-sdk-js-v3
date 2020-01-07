import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteRemediationExceptionsRequest, DeleteRemediationExceptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRemediationExceptionsCommandInput = DeleteRemediationExceptionsRequest;
export declare type DeleteRemediationExceptionsCommandOutput = DeleteRemediationExceptionsResponse & __MetadataBearer;
export declare class DeleteRemediationExceptionsCommand extends $Command<DeleteRemediationExceptionsCommandInput, DeleteRemediationExceptionsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteRemediationExceptionsCommandInput;
    constructor(input: DeleteRemediationExceptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRemediationExceptionsCommandInput, DeleteRemediationExceptionsCommandOutput>;
    private serialize;
    private deserialize;
}
