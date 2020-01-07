import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DeleteCollectionRequest, DeleteCollectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCollectionCommandInput = DeleteCollectionRequest;
export declare type DeleteCollectionCommandOutput = DeleteCollectionResponse & __MetadataBearer;
export declare class DeleteCollectionCommand extends $Command<DeleteCollectionCommandInput, DeleteCollectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DeleteCollectionCommandInput;
    constructor(input: DeleteCollectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCollectionCommandInput, DeleteCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
