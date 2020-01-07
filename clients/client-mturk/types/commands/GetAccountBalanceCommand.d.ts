import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetAccountBalanceRequest, GetAccountBalanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccountBalanceCommandInput = GetAccountBalanceRequest;
export declare type GetAccountBalanceCommandOutput = GetAccountBalanceResponse & __MetadataBearer;
export declare class GetAccountBalanceCommand extends $Command<GetAccountBalanceCommandInput, GetAccountBalanceCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetAccountBalanceCommandInput;
    constructor(input: GetAccountBalanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountBalanceCommandInput, GetAccountBalanceCommandOutput>;
    private serialize;
    private deserialize;
}
