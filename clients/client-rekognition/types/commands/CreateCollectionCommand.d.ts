import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { CreateCollectionRequest, CreateCollectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCollectionCommandInput = CreateCollectionRequest;
export declare type CreateCollectionCommandOutput = CreateCollectionResponse & __MetadataBearer;
export declare class CreateCollectionCommand extends $Command<CreateCollectionCommandInput, CreateCollectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: CreateCollectionCommandInput;
    constructor(input: CreateCollectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCollectionCommandInput, CreateCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
