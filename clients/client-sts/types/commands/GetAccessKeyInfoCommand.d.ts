import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { GetAccessKeyInfoRequest, GetAccessKeyInfoResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccessKeyInfoCommandInput = GetAccessKeyInfoRequest;
export declare type GetAccessKeyInfoCommandOutput = GetAccessKeyInfoResponse & __MetadataBearer;
export declare class GetAccessKeyInfoCommand extends $Command<GetAccessKeyInfoCommandInput, GetAccessKeyInfoCommandOutput, STSClientResolvedConfig> {
    readonly input: GetAccessKeyInfoCommandInput;
    constructor(input: GetAccessKeyInfoCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: STSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccessKeyInfoCommandInput, GetAccessKeyInfoCommandOutput>;
    private serialize;
    private deserialize;
}
