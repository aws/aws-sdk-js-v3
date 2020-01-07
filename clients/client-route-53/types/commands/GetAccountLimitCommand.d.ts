import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetAccountLimitRequest, GetAccountLimitResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccountLimitCommandInput = GetAccountLimitRequest;
export declare type GetAccountLimitCommandOutput = GetAccountLimitResponse & __MetadataBearer;
export declare class GetAccountLimitCommand extends $Command<GetAccountLimitCommandInput, GetAccountLimitCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetAccountLimitCommandInput;
    constructor(input: GetAccountLimitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountLimitCommandInput, GetAccountLimitCommandOutput>;
    private serialize;
    private deserialize;
}
