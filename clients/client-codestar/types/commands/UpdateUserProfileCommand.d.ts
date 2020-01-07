import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { UpdateUserProfileRequest, UpdateUserProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUserProfileCommandInput = UpdateUserProfileRequest;
export declare type UpdateUserProfileCommandOutput = UpdateUserProfileResult & __MetadataBearer;
export declare class UpdateUserProfileCommand extends $Command<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: UpdateUserProfileCommandInput;
    constructor(input: UpdateUserProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
