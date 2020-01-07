import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { IndexFacesRequest, IndexFacesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type IndexFacesCommandInput = IndexFacesRequest;
export declare type IndexFacesCommandOutput = IndexFacesResponse & __MetadataBearer;
export declare class IndexFacesCommand extends $Command<IndexFacesCommandInput, IndexFacesCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: IndexFacesCommandInput;
    constructor(input: IndexFacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IndexFacesCommandInput, IndexFacesCommandOutput>;
    private serialize;
    private deserialize;
}
