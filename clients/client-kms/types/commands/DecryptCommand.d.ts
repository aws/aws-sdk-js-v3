import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DecryptRequest, DecryptResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DecryptCommandInput = DecryptRequest;
export declare type DecryptCommandOutput = DecryptResponse & __MetadataBearer;
export declare class DecryptCommand extends $Command<DecryptCommandInput, DecryptCommandOutput, KMSClientResolvedConfig> {
    readonly input: DecryptCommandInput;
    constructor(input: DecryptCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DecryptCommandInput, DecryptCommandOutput>;
    private serialize;
    private deserialize;
}
