import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateUserProfileRequest, CreateUserProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUserProfileCommandInput = CreateUserProfileRequest;
export declare type CreateUserProfileCommandOutput = CreateUserProfileResponse & __MetadataBearer;
export declare class CreateUserProfileCommand extends $Command<CreateUserProfileCommandInput, CreateUserProfileCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateUserProfileCommandInput;
    constructor(input: CreateUserProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserProfileCommandInput, CreateUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
