import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteLagRequest, Lag } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLagCommandInput = DeleteLagRequest;
export declare type DeleteLagCommandOutput = Lag & __MetadataBearer;
export declare class DeleteLagCommand extends $Command<DeleteLagCommandInput, DeleteLagCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteLagCommandInput;
    constructor(input: DeleteLagCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLagCommandInput, DeleteLagCommandOutput>;
    private serialize;
    private deserialize;
}
