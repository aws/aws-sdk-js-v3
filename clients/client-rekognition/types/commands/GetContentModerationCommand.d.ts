import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetContentModerationRequest, GetContentModerationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetContentModerationCommandInput = GetContentModerationRequest;
export declare type GetContentModerationCommandOutput = GetContentModerationResponse & __MetadataBearer;
export declare class GetContentModerationCommand extends $Command<GetContentModerationCommandInput, GetContentModerationCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: GetContentModerationCommandInput;
    constructor(input: GetContentModerationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContentModerationCommandInput, GetContentModerationCommandOutput>;
    private serialize;
    private deserialize;
}
