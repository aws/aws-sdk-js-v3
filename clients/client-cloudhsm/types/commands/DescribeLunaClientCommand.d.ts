import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { DescribeLunaClientRequest, DescribeLunaClientResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLunaClientCommandInput = DescribeLunaClientRequest;
export declare type DescribeLunaClientCommandOutput = DescribeLunaClientResponse & __MetadataBearer;
export declare class DescribeLunaClientCommand extends $Command<DescribeLunaClientCommandInput, DescribeLunaClientCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: DescribeLunaClientCommandInput;
    constructor(input: DescribeLunaClientCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLunaClientCommandInput, DescribeLunaClientCommandOutput>;
    private serialize;
    private deserialize;
}
