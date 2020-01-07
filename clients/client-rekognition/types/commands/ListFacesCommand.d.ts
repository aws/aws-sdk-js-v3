import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { ListFacesRequest, ListFacesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFacesCommandInput = ListFacesRequest;
export declare type ListFacesCommandOutput = ListFacesResponse & __MetadataBearer;
export declare class ListFacesCommand extends $Command<ListFacesCommandInput, ListFacesCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: ListFacesCommandInput;
    constructor(input: ListFacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFacesCommandInput, ListFacesCommandOutput>;
    private serialize;
    private deserialize;
}
