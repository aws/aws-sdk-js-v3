import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { DescribeFaqRequest, DescribeFaqResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFaqCommandInput = DescribeFaqRequest;
export declare type DescribeFaqCommandOutput = DescribeFaqResponse & __MetadataBearer;
export declare class DescribeFaqCommand extends $Command<DescribeFaqCommandInput, DescribeFaqCommandOutput, kendraClientResolvedConfig> {
    readonly input: DescribeFaqCommandInput;
    constructor(input: DescribeFaqCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFaqCommandInput, DescribeFaqCommandOutput>;
    private serialize;
    private deserialize;
}
