import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateTapesInput, CreateTapesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTapesCommandInput = CreateTapesInput;
export declare type CreateTapesCommandOutput = CreateTapesOutput & __MetadataBearer;
export declare class CreateTapesCommand extends $Command<CreateTapesCommandInput, CreateTapesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateTapesCommandInput;
    constructor(input: CreateTapesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTapesCommandInput, CreateTapesCommandOutput>;
    private serialize;
    private deserialize;
}
