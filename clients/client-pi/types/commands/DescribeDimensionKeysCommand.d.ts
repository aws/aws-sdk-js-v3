import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { DescribeDimensionKeysRequest, DescribeDimensionKeysResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDimensionKeysCommandInput = DescribeDimensionKeysRequest;
export declare type DescribeDimensionKeysCommandOutput = DescribeDimensionKeysResponse & __MetadataBearer;
export declare class DescribeDimensionKeysCommand extends $Command<DescribeDimensionKeysCommandInput, DescribeDimensionKeysCommandOutput, PIClientResolvedConfig> {
    readonly input: DescribeDimensionKeysCommandInput;
    constructor(input: DescribeDimensionKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDimensionKeysCommandInput, DescribeDimensionKeysCommandOutput>;
    private serialize;
    private deserialize;
}
