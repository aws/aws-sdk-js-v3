import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeLagsRequest, Lags } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLagsCommandInput = DescribeLagsRequest;
export declare type DescribeLagsCommandOutput = Lags & __MetadataBearer;
export declare class DescribeLagsCommand extends $Command<DescribeLagsCommandInput, DescribeLagsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeLagsCommandInput;
    constructor(input: DescribeLagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLagsCommandInput, DescribeLagsCommandOutput>;
    private serialize;
    private deserialize;
}
