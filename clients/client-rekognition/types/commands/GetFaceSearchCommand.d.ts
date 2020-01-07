import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetFaceSearchRequest, GetFaceSearchResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFaceSearchCommandInput = GetFaceSearchRequest;
export declare type GetFaceSearchCommandOutput = GetFaceSearchResponse & __MetadataBearer;
export declare class GetFaceSearchCommand extends $Command<GetFaceSearchCommandInput, GetFaceSearchCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: GetFaceSearchCommandInput;
    constructor(input: GetFaceSearchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFaceSearchCommandInput, GetFaceSearchCommandOutput>;
    private serialize;
    private deserialize;
}
