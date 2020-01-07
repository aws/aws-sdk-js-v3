import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { DeleteUserProfileRequest, DeleteUserProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserProfileCommandInput = DeleteUserProfileRequest;
export declare type DeleteUserProfileCommandOutput = DeleteUserProfileResult & __MetadataBearer;
export declare class DeleteUserProfileCommand extends $Command<DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: DeleteUserProfileCommandInput;
    constructor(input: DeleteUserProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
