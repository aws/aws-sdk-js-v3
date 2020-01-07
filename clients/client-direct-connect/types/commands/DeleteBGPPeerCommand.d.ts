import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteBGPPeerRequest, DeleteBGPPeerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBGPPeerCommandInput = DeleteBGPPeerRequest;
export declare type DeleteBGPPeerCommandOutput = DeleteBGPPeerResponse & __MetadataBearer;
export declare class DeleteBGPPeerCommand extends $Command<DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteBGPPeerCommandInput;
    constructor(input: DeleteBGPPeerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput>;
    private serialize;
    private deserialize;
}
