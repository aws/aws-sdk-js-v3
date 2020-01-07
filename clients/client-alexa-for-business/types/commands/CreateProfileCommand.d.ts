import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateProfileRequest, CreateProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProfileCommandInput = CreateProfileRequest;
export declare type CreateProfileCommandOutput = CreateProfileResponse & __MetadataBearer;
export declare class CreateProfileCommand extends $Command<CreateProfileCommandInput, CreateProfileCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: CreateProfileCommandInput;
    constructor(input: CreateProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProfileCommandInput, CreateProfileCommandOutput>;
    private serialize;
    private deserialize;
}
