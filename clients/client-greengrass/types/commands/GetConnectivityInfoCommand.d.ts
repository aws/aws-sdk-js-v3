import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetConnectivityInfoRequest, GetConnectivityInfoResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConnectivityInfoCommandInput = GetConnectivityInfoRequest;
export declare type GetConnectivityInfoCommandOutput = GetConnectivityInfoResponse & __MetadataBearer;
export declare class GetConnectivityInfoCommand extends $Command<GetConnectivityInfoCommandInput, GetConnectivityInfoCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetConnectivityInfoCommandInput;
    constructor(input: GetConnectivityInfoCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectivityInfoCommandInput, GetConnectivityInfoCommandOutput>;
    private serialize;
    private deserialize;
}
