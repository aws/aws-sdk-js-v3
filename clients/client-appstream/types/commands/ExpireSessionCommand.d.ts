import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { ExpireSessionRequest, ExpireSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExpireSessionCommandInput = ExpireSessionRequest;
export declare type ExpireSessionCommandOutput = ExpireSessionResult & __MetadataBearer;
export declare class ExpireSessionCommand extends $Command<ExpireSessionCommandInput, ExpireSessionCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: ExpireSessionCommandInput;
    constructor(input: ExpireSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExpireSessionCommandInput, ExpireSessionCommandOutput>;
    private serialize;
    private deserialize;
}
