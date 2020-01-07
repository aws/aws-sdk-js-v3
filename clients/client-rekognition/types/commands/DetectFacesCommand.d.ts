import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DetectFacesRequest, DetectFacesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectFacesCommandInput = DetectFacesRequest;
export declare type DetectFacesCommandOutput = DetectFacesResponse & __MetadataBearer;
export declare class DetectFacesCommand extends $Command<DetectFacesCommandInput, DetectFacesCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DetectFacesCommandInput;
    constructor(input: DetectFacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectFacesCommandInput, DetectFacesCommandOutput>;
    private serialize;
    private deserialize;
}
