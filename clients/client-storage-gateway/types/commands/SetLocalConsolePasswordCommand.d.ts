import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { SetLocalConsolePasswordInput, SetLocalConsolePasswordOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetLocalConsolePasswordCommandInput = SetLocalConsolePasswordInput;
export declare type SetLocalConsolePasswordCommandOutput = SetLocalConsolePasswordOutput & __MetadataBearer;
export declare class SetLocalConsolePasswordCommand extends $Command<SetLocalConsolePasswordCommandInput, SetLocalConsolePasswordCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: SetLocalConsolePasswordCommandInput;
    constructor(input: SetLocalConsolePasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLocalConsolePasswordCommandInput, SetLocalConsolePasswordCommandOutput>;
    private serialize;
    private deserialize;
}
