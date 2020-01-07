import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListVolumesInput, ListVolumesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVolumesCommandInput = ListVolumesInput;
export declare type ListVolumesCommandOutput = ListVolumesOutput & __MetadataBearer;
export declare class ListVolumesCommand extends $Command<ListVolumesCommandInput, ListVolumesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListVolumesCommandInput;
    constructor(input: ListVolumesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVolumesCommandInput, ListVolumesCommandOutput>;
    private serialize;
    private deserialize;
}
