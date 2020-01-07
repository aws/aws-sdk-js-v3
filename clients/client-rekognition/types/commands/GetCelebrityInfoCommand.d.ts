import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetCelebrityInfoRequest, GetCelebrityInfoResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCelebrityInfoCommandInput = GetCelebrityInfoRequest;
export declare type GetCelebrityInfoCommandOutput = GetCelebrityInfoResponse & __MetadataBearer;
export declare class GetCelebrityInfoCommand extends $Command<GetCelebrityInfoCommandInput, GetCelebrityInfoCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: GetCelebrityInfoCommandInput;
    constructor(input: GetCelebrityInfoCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCelebrityInfoCommandInput, GetCelebrityInfoCommandOutput>;
    private serialize;
    private deserialize;
}
