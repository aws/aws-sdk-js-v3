import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { CompareFacesRequest, CompareFacesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CompareFacesCommandInput = CompareFacesRequest;
export declare type CompareFacesCommandOutput = CompareFacesResponse & __MetadataBearer;
export declare class CompareFacesCommand extends $Command<CompareFacesCommandInput, CompareFacesCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: CompareFacesCommandInput;
    constructor(input: CompareFacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompareFacesCommandInput, CompareFacesCommandOutput>;
    private serialize;
    private deserialize;
}
