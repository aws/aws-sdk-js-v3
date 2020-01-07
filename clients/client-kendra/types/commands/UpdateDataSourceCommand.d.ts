import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { UpdateDataSourceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDataSourceCommandInput = UpdateDataSourceRequest;
export declare type UpdateDataSourceCommandOutput = __MetadataBearer;
export declare class UpdateDataSourceCommand extends $Command<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput, kendraClientResolvedConfig> {
    readonly input: UpdateDataSourceCommandInput;
    constructor(input: UpdateDataSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
