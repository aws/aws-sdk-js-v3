import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteTapeInput, DeleteTapeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTapeCommandInput = DeleteTapeInput;
export declare type DeleteTapeCommandOutput = DeleteTapeOutput & __MetadataBearer;
export declare class DeleteTapeCommand extends $Command<DeleteTapeCommandInput, DeleteTapeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteTapeCommandInput;
    constructor(input: DeleteTapeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTapeCommandInput, DeleteTapeCommandOutput>;
    private serialize;
    private deserialize;
}
