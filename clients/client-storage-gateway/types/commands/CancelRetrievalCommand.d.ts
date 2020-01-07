import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CancelRetrievalInput, CancelRetrievalOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelRetrievalCommandInput = CancelRetrievalInput;
export declare type CancelRetrievalCommandOutput = CancelRetrievalOutput & __MetadataBearer;
export declare class CancelRetrievalCommand extends $Command<CancelRetrievalCommandInput, CancelRetrievalCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CancelRetrievalCommandInput;
    constructor(input: CancelRetrievalCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelRetrievalCommandInput, CancelRetrievalCommandOutput>;
    private serialize;
    private deserialize;
}
