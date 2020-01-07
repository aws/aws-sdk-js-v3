import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteUserDefinedFunctionRequest, DeleteUserDefinedFunctionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserDefinedFunctionCommandInput = DeleteUserDefinedFunctionRequest;
export declare type DeleteUserDefinedFunctionCommandOutput = DeleteUserDefinedFunctionResponse & __MetadataBearer;
export declare class DeleteUserDefinedFunctionCommand extends $Command<DeleteUserDefinedFunctionCommandInput, DeleteUserDefinedFunctionCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteUserDefinedFunctionCommandInput;
    constructor(input: DeleteUserDefinedFunctionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserDefinedFunctionCommandInput, DeleteUserDefinedFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
