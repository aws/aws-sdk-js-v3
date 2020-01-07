import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetProfileRequest, GetProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetProfileCommandInput = GetProfileRequest;
export declare type GetProfileCommandOutput = GetProfileResponse & __MetadataBearer;
export declare class GetProfileCommand extends $Command<GetProfileCommandInput, GetProfileCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetProfileCommandInput;
    constructor(input: GetProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProfileCommandInput, GetProfileCommandOutput>;
    private serialize;
    private deserialize;
}
