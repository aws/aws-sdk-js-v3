import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateProfileRequest, UpdateProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateProfileCommandInput = UpdateProfileRequest;
export declare type UpdateProfileCommandOutput = UpdateProfileResponse & __MetadataBearer;
export declare class UpdateProfileCommand extends $Command<UpdateProfileCommandInput, UpdateProfileCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateProfileCommandInput;
    constructor(input: UpdateProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProfileCommandInput, UpdateProfileCommandOutput>;
    private serialize;
    private deserialize;
}
