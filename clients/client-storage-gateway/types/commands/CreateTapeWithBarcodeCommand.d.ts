import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateTapeWithBarcodeInput, CreateTapeWithBarcodeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTapeWithBarcodeCommandInput = CreateTapeWithBarcodeInput;
export declare type CreateTapeWithBarcodeCommandOutput = CreateTapeWithBarcodeOutput & __MetadataBearer;
export declare class CreateTapeWithBarcodeCommand extends $Command<CreateTapeWithBarcodeCommandInput, CreateTapeWithBarcodeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateTapeWithBarcodeCommandInput;
    constructor(input: CreateTapeWithBarcodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTapeWithBarcodeCommandInput, CreateTapeWithBarcodeCommandOutput>;
    private serialize;
    private deserialize;
}
