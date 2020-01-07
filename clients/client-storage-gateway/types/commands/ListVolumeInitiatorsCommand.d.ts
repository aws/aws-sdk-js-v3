import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListVolumeInitiatorsInput, ListVolumeInitiatorsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVolumeInitiatorsCommandInput = ListVolumeInitiatorsInput;
export declare type ListVolumeInitiatorsCommandOutput = ListVolumeInitiatorsOutput & __MetadataBearer;
export declare class ListVolumeInitiatorsCommand extends $Command<ListVolumeInitiatorsCommandInput, ListVolumeInitiatorsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListVolumeInitiatorsCommandInput;
    constructor(input: ListVolumeInitiatorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVolumeInitiatorsCommandInput, ListVolumeInitiatorsCommandOutput>;
    private serialize;
    private deserialize;
}
