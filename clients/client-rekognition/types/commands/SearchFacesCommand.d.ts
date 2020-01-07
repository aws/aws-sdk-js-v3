import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { SearchFacesRequest, SearchFacesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchFacesCommandInput = SearchFacesRequest;
export declare type SearchFacesCommandOutput = SearchFacesResponse & __MetadataBearer;
export declare class SearchFacesCommand extends $Command<SearchFacesCommandInput, SearchFacesCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: SearchFacesCommandInput;
    constructor(input: SearchFacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchFacesCommandInput, SearchFacesCommandOutput>;
    private serialize;
    private deserialize;
}
