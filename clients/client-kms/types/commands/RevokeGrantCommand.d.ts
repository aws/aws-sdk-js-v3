import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { RevokeGrantRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeGrantCommandInput = RevokeGrantRequest;
export declare type RevokeGrantCommandOutput = __MetadataBearer;
export declare class RevokeGrantCommand extends $Command<RevokeGrantCommandInput, RevokeGrantCommandOutput, KMSClientResolvedConfig> {
    readonly input: RevokeGrantCommandInput;
    constructor(input: RevokeGrantCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeGrantCommandInput, RevokeGrantCommandOutput>;
    private serialize;
    private deserialize;
}
