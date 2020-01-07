import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeTapesInput, DescribeTapesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTapesCommandInput = DescribeTapesInput;
export declare type DescribeTapesCommandOutput = DescribeTapesOutput & __MetadataBearer;
export declare class DescribeTapesCommand extends $Command<DescribeTapesCommandInput, DescribeTapesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeTapesCommandInput;
    constructor(input: DescribeTapesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTapesCommandInput, DescribeTapesCommandOutput>;
    private serialize;
    private deserialize;
}
