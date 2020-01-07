import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateUserProfileRequest, UpdateUserProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUserProfileCommandInput = UpdateUserProfileRequest;
export declare type UpdateUserProfileCommandOutput = UpdateUserProfileResponse & __MetadataBearer;
export declare class UpdateUserProfileCommand extends $Command<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateUserProfileCommandInput;
    constructor(input: UpdateUserProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
