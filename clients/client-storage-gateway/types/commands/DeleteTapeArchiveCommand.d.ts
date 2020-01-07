import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteTapeArchiveInput, DeleteTapeArchiveOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTapeArchiveCommandInput = DeleteTapeArchiveInput;
export declare type DeleteTapeArchiveCommandOutput = DeleteTapeArchiveOutput & __MetadataBearer;
export declare class DeleteTapeArchiveCommand extends $Command<DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteTapeArchiveCommandInput;
    constructor(input: DeleteTapeArchiveCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput>;
    private serialize;
    private deserialize;
}
