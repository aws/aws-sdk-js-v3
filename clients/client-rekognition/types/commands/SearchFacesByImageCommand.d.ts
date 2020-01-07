import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { SearchFacesByImageRequest, SearchFacesByImageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchFacesByImageCommandInput = SearchFacesByImageRequest;
export declare type SearchFacesByImageCommandOutput = SearchFacesByImageResponse & __MetadataBearer;
export declare class SearchFacesByImageCommand extends $Command<SearchFacesByImageCommandInput, SearchFacesByImageCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: SearchFacesByImageCommandInput;
    constructor(input: SearchFacesByImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchFacesByImageCommandInput, SearchFacesByImageCommandOutput>;
    private serialize;
    private deserialize;
}
