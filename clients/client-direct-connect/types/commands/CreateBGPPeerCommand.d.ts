import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateBGPPeerRequest, CreateBGPPeerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBGPPeerCommandInput = CreateBGPPeerRequest;
export declare type CreateBGPPeerCommandOutput = CreateBGPPeerResponse & __MetadataBearer;
export declare class CreateBGPPeerCommand extends $Command<CreateBGPPeerCommandInput, CreateBGPPeerCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateBGPPeerCommandInput;
    constructor(input: CreateBGPPeerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBGPPeerCommandInput, CreateBGPPeerCommandOutput>;
    private serialize;
    private deserialize;
}
